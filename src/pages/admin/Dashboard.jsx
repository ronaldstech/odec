import React, { useEffect, useState } from 'react';
import { Users, FileText, Sparkles, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
            <Icon size={24} />
        </div>
        <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        </div>
    </div>
);

const Dashboard = () => {
    const [stats, setStats] = useState({
        stories: 0,
        reports: 0,
        admins: 1 // Default
    });

    useEffect(() => {
        // Fetch specific stats if endpoints available, or mock for now as we just built the basic CRUD
        // For now using mock/placeholder logic or fetching counts
        const fetchStats = async () => {
            try {
                const storiesRes = await fetch('/api/stories.php');
                const storiesData = await storiesRes.json();

                const reportsRes = await fetch('/api/reports.php');
                const reportsData = await reportsRes.json();

                if (Array.isArray(storiesData)) {
                    setStats(prev => ({ ...prev, stories: storiesData.length }));
                }
                if (Array.isArray(reportsData)) {
                    setStats(prev => ({ ...prev, reports: reportsData.length }));
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Hello, Admin 👋</h1>
                <p className="text-slate-500">Here's what's happening with your content today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard
                    title="Total Stories"
                    value={stats.stories}
                    icon={Sparkles}
                    colorClass="bg-purple-100 text-purple-600"
                />
                <StatCard
                    title="Annual Reports"
                    value={stats.reports}
                    icon={FileText}
                    colorClass="bg-blue-100 text-blue-600"
                />
                <StatCard
                    title="Newsletter Owners"
                    value={stats.admins}
                    icon={Users}
                    colorClass="bg-emerald-100 text-emerald-600"
                />
                <StatCard
                    title="System Status"
                    value="Active"
                    icon={TrendingUp}
                    colorClass="bg-amber-100 text-amber-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between group">
                            <span className="font-medium text-slate-700">Add New Impact Story</span>
                            <Sparkles size={18} className="text-slate-400 group-hover:text-[var(--color-primary-500)]" />
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between group">
                            <span className="font-medium text-slate-700">Upload Annual Report</span>
                            <FileText size={18} className="text-slate-400 group-hover:text-[var(--color-primary-500)]" />
                        </button>
                    </div>
                </div>
                <div className="bg-[var(--color-primary-900)] p-6 rounded-2xl shadow-xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-bold text-xl mb-2">System Health</h3>
                        <p className="text-white/70 mb-6">Your database connection is stable and API endpoints are responding.</p>
                        <div className="flex items-center gap-2 text-sm font-medium bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Online</span>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-600)] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-accent-600)] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
