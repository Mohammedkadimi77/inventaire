import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, requests, queryParams = null }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route('requests.index'), queryParams)
  };

  const onkeypress = (name, e) => {
    if (e.key !== 'Enter') {
      searchFieldChanged(name, e.target.value);
    }
  };
  const handleDelete = (request) => {
      router.delete(route('requests.destroy', request.id));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">requests</h2>}
    >
      <Head title="requests" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="mb-4 flex justify-end">
                <Link href={route('requests.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Nouveau request
                </Link>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Equipment
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Justification
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Créé par
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    <TextInput
                        defaultValue={queryParams.equipment}
                        className="w-full"
                        placeholder="Équipement"
                        onChange={(e) => searchFieldChanged('equipment', e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            searchFieldChanged('equipment', e.target.value);
                          }
                        }}
                      />
                    </th>
                    <th scope="col" className="px-6 py-3">
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <SelectInput
                        defaultValue={queryParams.status}
                        className="w-full"
                        onChange={(e) => searchFieldChanged('status', e.target.value)}
                      >
                        <option value="">Tous</option>
                        <option value="en_attente">En attente</option>
                        <option value="approuvée">Approuvée</option>
                        <option value="refusée">Refusée</option>
                        <option value="livrée">Livrée</option>
                      </SelectInput>
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.data.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{request.equipment?.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{request.justification}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${request.status === 'en_attente' ? 'bg-blue-100 text-blue-800' :
                            request.status === 'approuvée' ? 'bg-green-100 text-green-800' :
                              request.status === 'refusée' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'}`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{request.user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={route('requests.edit', request.id)} className="text-indigo-600 hover:text-indigo-900 mr-3">
                          Modifier
                        </Link>
                        <button onClick={() => handleDelete(request)} className="text-red-600 hover:text-red-900">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={requests.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}