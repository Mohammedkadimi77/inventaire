import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, ticket }) {
  const { data, setData, put, errors, reset } = useForm({
    user_id: ticket.user_id || '',
    equipment_id: ticket.equipment_id || '',
    description: ticket.description || '',
    status: ticket.status || '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('tickets.update', ticket.id));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Edit
      </h2>}
    >
      <Head title="Edit Ticket" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div >
                  <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                    User
                  </label>
                  <input
                    type="text"
                    value={data.user_id}
                    onChange={(e) => setData('user_id', e.target.value)}
                    name="user_id"
                    id="user_id"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.user_id} className="mt-2" />
                </div>

                <div>
                  <label htmlFor="equipment_id" className="block text-sm font-medium text-gray-700">
                    Equipment
                  </label>
                  <input
                    type="text"
                    value={data.equipment_id}
                    onChange={(e) => setData('equipment_id', e.target.value)}
                    name="equipment_id"
                    id="type"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.equipment_id} className="mt-2" />
                </div>


                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    name="description"
                    id="description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <InputError message={errors.description} className="mt-2" />
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
                    <option value="ouvert">Ouvert</option>
                    <option value="en_cours">En cours</option>
                    <option value="résolu">Résolu</option>
                    <option value="fermé">Fermé</option>
                  </select>
                  <InputError message={errors.status} className="mt-2" />
                </div>







                <div className="flex justify-end gap-4">
                  <Link
                    href={route('tickets.index')}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Annuler
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
