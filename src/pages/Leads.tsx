import React, { useState } from 'react';
import { Plus, X, Edit3, Trash2 } from 'lucide-react';

const statusColors = {
  'New': 'bg-blue-100 text-blue-800',
  'Contacted': 'bg-yellow-100 text-yellow-800',
  'Qualified': 'bg-green-100 text-green-800',
  'Negotiation': 'bg-purple-100 text-purple-800',
  'Closed': 'bg-emerald-100 text-emerald-800',
};

const Leads = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Smith', company: 'Tech Corp', email: 'john@techcorp.com', status: 'New', value: '$5,000', lastContact: '2024-03-15' },
    // ... other initial leads
  ]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newLead, setNewLead] = useState({
    id: null,
    name: '',
    company: '',
    email: '',
    status: 'New',
    value: '',
    lastContact: '',
  });

  const openModal = (lead = null) => {
    setEditMode(!!lead);
    setNewLead(lead ? { ...lead } : { id: null, name: '', company: '', email: '', status: 'New', value: '', lastContact: '' });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLead(prevState => ({ ...prevState, [name]: value }));
  };

  const addOrEditLead = () => {
    if (editMode) {
      // Update lead
      setLeads(leads.map(lead => lead.id === newLead.id ? newLead : lead));
    } else {
      // Add new lead
      setLeads([...leads, { ...newLead, id: leads.length + 1, lastContact: new Date().toISOString().split('T')[0] }]);
    }
    closeModal();
  };

  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Leads Management</h1>
        <div className="space-x-2">
          <select
            className="px-4 py-2 border rounded-lg"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Closed">Closed</option>
          </select>
          <button 
            onClick={() => openModal()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Modal for adding/editing lead */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 space-y-4 w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{editMode ? 'Edit Lead' : 'Add New Lead'}</h2>
              <button onClick={closeModal}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newLead.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newLead.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newLead.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <select
              name="status"
              value={newLead.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed">Closed</option>
            </select>
            <input
              type="text"
              name="value"
              placeholder="Value"
              value={newLead.value}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              onClick={addOrEditLead}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editMode ? 'Update Lead' : 'Add Lead'}
            </button>
          </div>
        </div>
      )}

      {/* Display leads */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium rounded-full ${statusColors[lead.status]}`}>{lead.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.lastContact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button onClick={() => openModal(lead)} className="text-blue-600 hover:text-blue-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteLead(lead.id)} className="ml-2 text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leads;
