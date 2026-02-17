import React, { useState, useEffect } from 'react';
import { Plus, Trash2, FileText, Upload, X } from 'lucide-react';
import Button from '../../components/Button';

const ManageReports = () => {
    const [reports, setReports] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        year: new Date().getFullYear(),
        description: '',
        file: null,
        thumbnail: null
    });

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await fetch('/api/reports.php');
            const data = await response.json();
            if (Array.isArray(data)) setReports(data);
        } catch (error) {
            console.error('Failed to fetch reports', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('/api/reports.php', {
                method: 'POST',
                body: data
            });
            const result = await response.json();

            if (result.status === 'success') {
                setIsModalOpen(false);
                fetchReports();
                setFormData({
                    title: '',
                    year: new Date().getFullYear(),
                    description: '',
                    file: null,
                    thumbnail: null
                });
            } else {
                alert(result.message || 'Failed to upload report');
            }
        } catch (error) {
            console.error('Error uploading report', error);
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Manage Reports</h1>
                    <p className="text-slate-500">Upload and manage annual reports and documents.</p>
                </div>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                    <Upload size={18} className="mr-2" /> Upload Report
                </Button>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200 text-slate-500">
                        No reports found. Upload your first report.
                    </div>
                ) : (
                    reports.map(report => (
                        <div key={report.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
                            <div className="bg-slate-50 rounded-xl h-40 mb-4 flex items-center justify-center text-slate-300">
                                {report.thumbnail_url ? (
                                    <img src={report.thumbnail_url} alt={report.title} className="w-full h-full object-cover rounded-xl" />
                                ) : (
                                    <FileText size={48} />
                                )}
                            </div>
                            <div className="flex-1">
                                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded mb-2">
                                    {report.year}
                                </span>
                                <h3 className="font-bold text-slate-900 mb-1">{report.title}</h3>
                                <p className="text-sm text-slate-500 line-clamp-2">{report.description}</p>
                            </div>
                            <div className="flex gap-2 mt-4 pt-4 border-t border-slate-50">
                                <a href={report.file_url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 text-sm font-bold text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-lg transition-colors">
                                    View PDF
                                </a>
                                <button className="p-2 text-rose-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] w-full max-w-lg">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Upload Report</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Report Title</label>
                                <input
                                    type="text" name="title" required
                                    value={formData.title} onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Year</label>
                                <input
                                    type="number" name="year" required
                                    value={formData.year} onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">PDF Document</label>
                                <input
                                    type="file" name="file" required accept=".pdf"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Thumbnail (Optional)</label>
                                <input
                                    type="file" name="thumbnail" accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                                <textarea
                                    name="description" rows="3"
                                    value={formData.description} onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                ></textarea>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button type="button" variant="outline" className="flex-1 justify-center border-slate-200" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="primary" className="flex-1 justify-center" disabled={loading}>
                                    {loading ? 'Uploading...' : 'Upload Report'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageReports;
