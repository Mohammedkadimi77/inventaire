import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, equipment }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {`Equipments ${equipment.name}`}
      </h2>}

    >
      <Head title={`Equipments ${equipment.name}`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {equipment.name}
              </h1>
              <div className="flex gap-4">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Modifier
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Supprimer
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Informations</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <div className="mt-1 text-sm text-gray-900">{equipment.type}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Numéro de série</label>
                    <div className="mt-1 text-sm text-gray-900">{equipment.serial_number}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Statut</label>
                    <div className="mt-1">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${equipment.status === 'disponible' ? 'bg-green-100 text-green-800' :
                          equipment.status === 'affecté' ? 'bg-blue-100 text-blue-800' :
                            equipment.status === 'en_maintenance' ? 'bg-yellow-100 text-yellow-800' :
                              equipment.status === 'hors_service' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'}`}>
                        {equipment.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">location</label>
                    <div className="mt-1 text-sm text-gray-900">{equipment.location || '-'}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Assigné à</label>
                    <div className="mt-1 text-sm text-gray-900">{equipment.assigned_to || '-'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}