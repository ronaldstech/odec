import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, X } from 'lucide-react';
import Button from '../../components/Button';

const ManageStories = () => {
    const [stories, setStories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'Impact Story',
        author: '',
        date: '',
        excerpt: '',
        content: '',
        images: []
    });

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const response = await fetch('/api/stories.php');
            const data = await response.json();
            if (Array.isArray(data)) setStories(data);
        } catch (error) {
            console.error('Failed to fetch stories', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'images') {
                formData.images.forEach(file => {
                    data.append('images[]', file);
                });
            } else {
                data.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('/api/stories.php', {
                method: 'POST',
                body: data
            });
            const result = await response.json();

            if (result.status === 'success') {
                setIsModalOpen(false);
                fetchStories();
                // Reset form
                setFormData({
                    title: '',
                    category: 'Impact Story',
                    author: '',
                    date: '',
                    excerpt: '',
                    content: '',
                    images: []
                });
            } else {
                alert(result.message || 'Failed to save story');
            }
        } catch (error) {
            console.error('Error saving story', error);
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Manage Stories</h1>
                    <p className="text-slate-500">Add, edit, or remove impact stories and newsletters.</p>
                </div>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} className="mr-2" /> Add New Story
                </Button>
            </div>

            {/* Stories List */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-700">Title</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Category</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Date</th>
                            <th className="px-6 py-4 font-bold text-slate-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {stories.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                                    No stories found. Click "Add New Story" to create one.
                                </td>
                            </tr>
                        ) : (
                            stories.map(story => (
                                <tr key={story.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-900">{story.title}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${story.category === 'Impact Story' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                                            }`}>
                                            {story.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{story.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-lg transition-colors">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold">Add New Story</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                                    <input
                                        type="text" name="title" required
                                        value={formData.title} onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category} onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                    >
                                        <option value="Impact Story">Impact Story</option>
                                        <option value="Newsletter">Newsletter</option>
                                        <option value="News">News</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Author</label>
                                    <input
                                        type="text" name="author"
                                        value={formData.author} onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                                    <input
                                        type="date" name="date" required
                                        value={formData.date} onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Images (Multiple allowed)</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-[var(--color-primary-400)] transition-colors cursor-pointer relative">
                                    <div className="flex flex-col items-center gap-2 text-slate-500">
                                        <ImageIcon size={32} />
                                        <span className="font-medium">
                                            {formData.images.length > 0
                                                ? `${formData.images.length} images selected`
                                                : 'Click or drag to upload images'}
                                        </span>
                                        {formData.images.length > 0 && (
                                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                                {formData.images.map((file, i) => (
                                                    <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded-md truncate max-w-[150px]">
                                                        {file.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <input type="file" name="images" multiple onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Excerpt</label>
                                <textarea
                                    name="excerpt" rows="2"
                                    value={formData.excerpt} onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Content</label>
                                <textarea
                                    name="content" rows="6" required
                                    value={formData.content} onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                                ></textarea>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button type="button" variant="outline" className="flex-1 justify-center border-slate-200" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="primary" className="flex-1 justify-center" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save Story'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageStories;
