import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create ({ auth, equipment }) {
  const { data, setData, put, errors, reset } = useForm({
    name: equipment.name || '',
    type: equipment.type || '',
    serial_number: equipment.serial_number || '',
    status: equipment.status || '',
    location: equipment.location || '',
    assigned_to: equipment.assigned_to || '' || null,
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('equipments.update', equipment.id));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Edit Equipment {equipment.name}
      </h2>}
    >
      <Head title="Edit Equipment" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    // isFocused={true}
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <input
                    type="text"
                    value={data.type}
                    onChange={(e) => setData('type', e.target.value)}
                    name="type"
                    id="type"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.type} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="serial_number" className="block text-sm font-medium text-gray-700">
                    Serial Number
                  </label>
                  <input
                    type="text"
                    value={data.serial_number}
                    onChange={(e) => setData('serial_number', e.target.value)}
                    name="serial_number"
                    id="serial_number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.serial_number} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    id="status"
                    name="status"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Status</option>
                    <option value="disponible">Disponible</option>
                    <option value="affecté">Affecté</option>
                    <option value="en_maintenance">En Maintenance</option>
                    <option value="hors_service">Hors Service</option>
                    <option value="stock">Stock</option>
                  </select>
                  <InputError message={errors.status} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    name="location"
                    id="location"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.location} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="assigned_to" className="block text-sm font-medium text-gray-700">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    value={data.assigned_to}
                    onChange={(e) => setData('assigned_to', e.target.value)}
                    name="assigned_to"
                    id="assigned_to"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.assigned_to} className="mt-2" />
                </div>

                <div className="flex justify-end gap-4">
                  <Link
                    href={route('equipments.index')}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Modifier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}