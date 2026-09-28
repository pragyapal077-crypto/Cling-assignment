import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Package,
  Search,
  TrendingUp,
  Receipt,
  DollarSign,
  Kanban,
  Building2,
  Database,
  Smartphone,
  Cpu,
  Target,
  Eye,
  Star,
  CheckCircle2,
  Check,
  Send,
  Calendar,
  Mail,
  Phone,
  Menu,
  ChevronRight,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inquiry'); // 'inquiry' | 'schedule'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    // Set dynamic minimum date for meeting scheduler (today's ISO date)
    const todayStr = new Date().toISOString().split('T')[0];
    setMinDate(todayStr);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-600 selection:text-white min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center text-white font-black text-xl shadow-sm transition-transform group-hover:scale-105">
              C
            </div>
            <div>
              <span class="text-xl font-extrabold tracking-tight text-slate-900">
                CLING <span className="text-rose-600">INFO TECH</span>
              </span>
              <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                IT Solutions &amp; SaaS Products
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#products" className="hover:text-rose-600 transition-colors">SaaS Suite</a>
            <a href="#tech-stack" className="hover:text-rose-600 transition-colors">Tech Stack</a>
            <a href="#testimonials" className="hover:text-rose-600 transition-colors">Client Outcomes</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Get In Touch</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-rose-600 rounded-lg border border-rose-700 hover:bg-rose-700 active:bg-rose-800 transition-all shadow-sm"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-rose-600 hover:bg-slate-100 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold hover:text-rose-600 border-b border-slate-100"
            >
              Services
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold hover:text-rose-600 border-b border-slate-100"
            >
              SaaS Products
            </a>
            <a
              href="#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold hover:text-rose-600 border-b border-slate-100"
            >
              Tech Stack
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold hover:text-rose-600 border-b border-slate-100"
            >
              Client Outcomes
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-center text-sm font-semibold text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-all mt-4"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>Making Your Ideas Happen</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Custom IT Solutions, <span className="text-rose-600">AI Engineering</span> &amp; Proprietary SaaS
              </h1>
              
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Cling Infotech delivers high-performing IT services—from custom web applications, cross-platform mobile apps, and enterprise ERP systems to AI vision models and pre-built SaaS products.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-rose-600 rounded-lg border border-rose-700 hover:bg-rose-700 active:bg-rose-800 transition-all shadow-md"
                >
                  Get Your Project Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-all shadow-sm"
                >
                  Explore SaaS Suite
                </a>
              </div>

              {/* Company Metrics */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">350+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">390+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">6+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold">In-House Products</div>
                </div>
              </div>
            </div>

            {/* Product & AI Feature Display Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl space-y-5 relative">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-rose-50 text-rose-600 rounded-lg border border-rose-100">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Featured SaaS Products</h3>
                      <p className="text-xs text-slate-500">In-House Software Ecosystem</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Ready to Deploy
                  </span>
                </div>

                {/* Product List Mockup */}
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-rose-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-rose-600">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Rusho</span>
                        <span className="text-[11px] text-slate-500">On-Demand Home Services &amp; Repairs</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-rose-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-rose-600">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">ArvionPulse</span>
                        <span className="text-[11px] text-slate-500">Multi-Source Lead Extraction Engine</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-rose-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-rose-600">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Cling Sales &amp; Invoice</span>
                        <span className="text-[11px] text-slate-500">CRM &amp; Employee Expense Audit</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* AI Surveillance Mini Banner */}
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">AI Vision Surveillance</span>
                    </div>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">LIVE FEED</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Automated facial recognition &amp; threat detection algorithms operating with high precision.
                  </p>
                </div>

                <div className="pt-1 text-center">
                  <span className="text-xs font-medium text-slate-500">
                    Built with modern high-concurrency architecture
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proprietary SaaS Products Section */}
      <section id="products" className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-600 mb-2">Our Digital Products</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proprietary SaaS Solutions Built by Cling Infotech
            </p>
            <p className="mt-4 text-slate-600 text-base">
              Explore our suite of pre-built software platforms designed to streamline field services, B2B lead scraping, sales CRM, and finance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1: Rusho */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Package className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    On-Demand SaaS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Rusho</h3>
                <p className="text-xs font-bold text-slate-700 mb-3">On-Demand Home Services &amp; Maintenance Ecosystem</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  On-demand platform connecting users with verified professionals for home cleaning, errands, and repairs with live expert tracking.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Live Expert Tracking</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Verified Staff Onboarding</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Instant Service Booking</span></li>
                </ul>
              </div>
            </div>

            {/* Product 2: ArvionPulse */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Lead Engine
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">ArvionPulse</h3>
                <p className="text-xs font-bold text-slate-700 mb-3">Multi-Source Lead Scraper &amp; Data Engine</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Extract and enrich B2B lead profiles directly from Google Maps, Justdial, IndiaMART, and LinkedIn into structured sales workflows.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Google Maps &amp; Justdial Scraping</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>LinkedIn Lead Enrichment</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Category &amp; Location Filters</span></li>
                </ul>
              </div>
            </div>

            {/* Product 3: Cling Sales */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Sales Automation
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Cling Sales</h3>
                <p className="text-xs font-bold text-slate-700 mb-3">Automated Lead Management &amp; Follow-Up CRM</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Track leads in real time with automatic lead capture, smart follow-up reminders, and deal assignment workflows.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Real-Time Lead Pipeline</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Smart Follow-up Reminders</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Team Lead Assignment</span></li>
                </ul>
              </div>
            </div>

            {/* Product 4: Cling Invoice */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Expense Control
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Cling Invoice</h3>
                <p className="text-xs font-bold text-slate-700 mb-3">Automated Employee Reimbursements &amp; Invoicing</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Simplifies employee reimbursement requests, enables manager approval workflows, and tracks past invoices for audit reporting.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Manager Approval Workflow</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Reimbursement Portal</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Audit &amp; History Reports</span></li>
                </ul>
              </div>
            </div>

            {/* Product 5: Cling Income */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Finance Dashboard
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Cling Income</h3>
                <p className="text-xs font-bold text-slate-700 mb-3">Financial Analytics &amp; Revenue Tracking</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Intuitive financial portal providing businesses with a clean overview of earnings, invoices, operational expenses, and profit margins.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Analytical Income Dashboard</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Expense Tracking Ledger</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Profit &amp; Loss Metrics</span></li>
                </ul>
              </div>
            </div>

            {/* Product 6: Task Flow */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-rose-300 hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Kanban className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
                    Productivity
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Task Flow</h3>
                <p class="text-xs font-bold text-slate-700 mb-3">Team Task &amp; Project Execution Engine</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Organize project milestones, monitor team progress, and collaborate seamlessly across engineering and client delivery teams.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Project Progress Monitoring</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Task Status Tracking</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Milestone Alerts</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-600 mb-2">Capabilities</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Custom IT Services &amp; Engineering
            </p>
            <p className="mt-4 text-slate-600 text-base">
              We design and engineer bespoke software solutions from scratch—ensuring high concurrency, security, and smooth user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Core Tech
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Web Portals &amp; Enterprise Apps</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Scalable, custom-designed web portals and enterprise applications built from the ground up without restrictive templates.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Custom Web Applications</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>High-Concurrency Backends</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>API Integrations &amp; Security</span></li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Operations
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Custom ERP Development</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Unify inventory, HR, back-office, and client management into a single tailor-made ERP system configured for your business.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Back-Office Integration</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Real-Time Inventory Ledger</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>HR &amp; Payroll Workflows</span></li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Mobile Apps
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Mobile Application Engineering</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Cross-platform iOS and Android mobile solutions built for rapid consumer adoption and field team synchronization.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>React Native &amp; Flutter</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Real-time Push Notifications</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Offline Data Syncing</span></li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Applied AI
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">AI, Face Recognition &amp; Computer Vision</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Deploy intelligent video surveillance models, automated facial recognition, and machine learning pipelines into security systems.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Suspicious Threat Detection</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Facial Recognition Engines</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Custom AI Analytics Workflows</span></li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Digital Marketing
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Digital &amp; Social Media Marketing</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Result-oriented SEO campaigns, social media management, Google Ads execution, and target audience engagement strategies.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Precision SEO &amp; SEM</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Social Media Campaign Management</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>ROI &amp; Performance Tracking</span></li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    3D Media
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3D Animations &amp; Visual Experiences</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  3D logo animations, promotional videos, WebGL experiences, and interactive motion graphics for high-impact visual campaigns.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>3D Logo &amp; Product Animation</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Promotional Video Ads</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" /><span>Interactive Visual Assets</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-600 mb-2">Tech Stack</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Modern Frameworks &amp; Infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">Frontend</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">React / Next.js</h3>
              <p className="text-xs text-slate-500">High-speed server-rendered web applications.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">Backend</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Node.js / Express / Python</h3>
              <p className="text-xs text-slate-500">Scalable microservices and high-throughput APIs.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">AI &amp; Vision</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">OpenCV / PyTorch / YOLO</h3>
              <p className="text-xs text-slate-500">Computer vision and facial detection models.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">Databases</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">PostgreSQL / MongoDB</h3>
              <p className="text-xs text-slate-500">ACID-compliant storage and document databases.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">DevOps</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">Docker / Kubernetes / AWS</h3>
              <p className="text-xs text-slate-500">Containerized cloud infrastructure and CI/CD.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block mb-2">Mobile</span>
              <h3 className="text-base font-bold text-slate-900 mb-1">React Native / Flutter</h3>
              <p className="text-xs text-slate-500">Native performance cross-platform mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-600 mb-2">Proven Track Record</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Client Outcomes &amp; Enterprise Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Cling Infotech's custom ERP system integrated our entire back-office and reduced our operational delays dramatically across our distribution nodes."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Vikram R.</h4>
                  <p className="text-[11px] text-slate-500">Chief Operating Officer</p>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1 rounded">
                  65% Faster Processing
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "ArvionPulse allowed our sales team to source enriched contact details from Google Maps and LinkedIn in minutes, scaling our outbound outreach."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sarah J.</h4>
                  <p className="text-[11px] text-slate-500">Head of Sales</p>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1 rounded">
                  3x Lead Pipeline
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "Their AI computer vision surveillance system gave us automated threat detection across all operational access points seamlessly."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">David C.</h4>
                  <p className="text-[11px] text-slate-500">Security Director</p>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1 rounded">
                  Automated Surveillance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Inquiry / Meeting Form */}
      <section id="contact" className="py-20 bg-slate-100/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-600 mb-2">Get In Touch</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Start Your Digital Transformation
            </p>
            <p className="mt-3 text-slate-600 text-sm">
              Reach out to discuss your project requirements or to request a product demo call with our lead engineers.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            
            {/* Tab Switching Navigation */}
            <div className="flex border-b border-slate-200 mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('inquiry');
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all ${
                  activeTab === 'inquiry'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Project Scope Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('schedule');
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all ${
                  activeTab === 'schedule'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Schedule Meeting Call
              </button>
            </div>

            {/* Submission Success Message */}
            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Request Received!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you. Our technical team will review your inquiry and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-4 text-xs font-bold text-rose-600 hover:underline"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                {/* Form 1: General Inquiry */}
                {activeTab === 'inquiry' && (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiry-full-name" className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="inquiry-full-name"
                          name="full_name"
                          placeholder="John Doe"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiry-email" className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="inquiry-email"
                          name="email"
                          placeholder="john@company.com"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiry-phone" className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="inquiry-phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiry-company" className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                        <input
                          type="text"
                          id="inquiry-company"
                          name="company"
                          placeholder="Acme Corp"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry-service" className="block text-xs font-bold text-slate-700 mb-1">Service / SaaS Product Interest *</label>
                      <select
                        id="inquiry-service"
                        name="service"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                      >
                        <option value="Custom Web Applications & Portals">Custom Web Applications &amp; Portals</option>
                        <option value="Custom ERP Systems">Custom ERP Development</option>
                        <option value="Mobile App Engineering">Mobile App Engineering</option>
                        <option value="AI Computer Vision & Surveillance">AI Computer Vision &amp; Surveillance</option>
                        <option value="Rusho Platform Demo">Rusho Platform Demo</option>
                        <option value="ArvionPulse Scraper Engine">ArvionPulse Lead Scraper</option>
                        <option value="Cling Sales / Invoice / Income">Cling Sales &amp; Invoicing Suite</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="inquiry-message" className="block text-xs font-bold text-slate-700 mb-1">Project Details &amp; Requirements</label>
                      <textarea
                        id="inquiry-message"
                        name="message"
                        rows={4}
                        placeholder="Describe your project goals, scope, timeline..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-700 active:bg-rose-800 transition-all shadow-sm flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Inquiry</span>
                    </button>
                  </form>
                )}

                {/* Form 2: Schedule Call */}
                {activeTab === 'schedule' && (
                  <form onSubmit={handleScheduleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="schedule-full-name" className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="schedule-full-name"
                          name="full_name"
                          placeholder="John Doe"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="schedule-email" className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="schedule-email"
                          name="email"
                          placeholder="john@company.com"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="schedule-phone" className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="schedule-phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="schedule-meeting-date" className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          id="schedule-meeting-date"
                          name="meeting_date"
                          min={minDate}
                          defaultValue={minDate}
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="schedule-meeting-time" className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot *</label>
                      <select
                        id="schedule-meeting-time"
                        name="meeting_time"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                      >
                        <option value="11:00 AM IST">11:00 AM IST</option>
                        <option value="02:00 PM IST">02:00 PM IST</option>
                        <option value="04:00 PM IST">04:00 PM IST</option>
                        <option value="06:00 PM IST">06:00 PM IST</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="schedule-message" className="block text-xs font-bold text-slate-700 mb-1">Discussion Topic / Agenda</label>
                      <textarea
                        id="schedule-message"
                        name="message"
                        rows={3}
                        placeholder="Briefly let us know what you would like to discuss..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-rose-600 focus:bg-white transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-700 active:bg-rose-800 transition-all shadow-sm flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Meeting Booking</span>
                    </button>
                  </form>
                )}
              </>
            )}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded bg-rose-600 flex items-center justify-center text-white font-black text-base">C</div>
                <span className="text-lg font-extrabold text-white">CLING INFO TECH</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom software engineering, AI computer vision, and proprietary SaaS products for growth enterprises.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Capabilities</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Web Application Portals</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Enterprise ERP Systems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Mobile App Engineering</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI &amp; Face Recognition</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">SaaS Suite</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#products" className="hover:text-white transition-colors">Rusho (On-Demand Services)</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">ArvionPulse (Lead Scraper)</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Cling Sales &amp; Invoice</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Task Flow</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Connect</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center space-x-2"><Mail className="w-3.5 h-3.5 text-rose-500" /><span>contact@clinginfotech.com</span></li>
                <li className="flex items-center space-x-2"><Phone className="w-3.5 h-3.5 text-rose-500" /><span>+91 98765 43210</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Cling Infotech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" class="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}