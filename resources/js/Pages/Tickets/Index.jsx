// import Pagination from "@/Components/Pagination";
// import SelectInput from "@/Components/SelectInput";
// import TextInput from "@/Components/TextInput";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import AuthenticatedLayoutUser from "@/Layouts/AuthenticatedLayoutUser";

// import { Head, Link, router } from "@inertiajs/react";

// export default function Index({ auth, tickets, queryParams = null }) {
//   queryParams = queryParams || {};
//   const searchFieldChanged = (name, value) => {
//     if (value) {
//       queryParams[name] = value;
//     } else {
//       delete queryParams[name];
//     }
//     router.get(route('tickets.index'), queryParams)
//   };

//   const onkeypress = (name, e) => {
//     if (e.key !== 'Enter') {
//       searchFieldChanged(name, e.target.value);
//     }
//   };

//   const handleDelete = (ticket) => {
//     if (!window.confirm('Voulez-vous vraiment supprimer ce ticket ?')) {
//       return;
//     }
//     router.delete(route('tickets.destroy', ticket.id));
//   }
//   const Layout = auth.user.role === 'admin' ? AuthenticatedLayout : AuthenticatedLayoutUser;

//   return (
//     <Layout
//       user={auth.user}
//       header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>}
//     >
//       <Head title="Tickets" />
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//           <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//             <div className="p-6 text-gray-900">
//               {auth.user && auth.user.role !== 'admin' && (
//                 <div className="mb-4 flex justify-end">
//                   <Link href={route('tickets.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Nouveau Ticket
//                   </Link>
//                 </div>
//               )}

//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Description
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Équipement
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Statut
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Créé par
//                     </th>

//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>

//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3">
//                       <TextInput
//                         className="w-full"
//                         defaultValue={queryParams.description}
//                         placeholder="Description"
//                         onChange={(e) => searchFieldChanged('description', e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') {
//                             searchFieldChanged('description', e.target.value);
//                           }
//                         }}
//                       />
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       <TextInput
//                         className="w-full"
//                         defaultValue={queryParams.equipment_id}
//                         placeholder="Équipement"
//                         onChange={(e) => searchFieldChanged('equipment_id', e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') {
//                             searchFieldChanged('equipment_id', e.target.value);
//                           }
//                         }}
//                       />
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       <SelectInput
//                         defaultValue={queryParams.status}
//                         className="w-full"
//                         onChange={(e) => searchFieldChanged('status', e.target.value)}
//                       >
//                         <option value="">Tous</option>
//                         <option value="ouvert">Ouvert</option>
//                         <option value="en_cours">En cours</option>
//                         <option value="résolu">Résolu</option>
//                         <option value="fermé">Fermé</option>
//                       </SelectInput>
//                     </th>
//                     <th scope="col" className="px-6 py-3"></th>
//                     <th scope="col" className="px-6 py-3"></th>
//                   </tr>
//                 </thead>

//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {tickets.data.map((ticket) => (
//                     <tr key={ticket.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">{ticket.description}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{ticket.equipment_id}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
//                           ${ticket.status === 'ouvert' ? 'bg-blue-100 text-blue-800' :
//                             ticket.status === 'en_cours' ? 'bg-yellow-100 text-yellow-800' :
//                               ticket.status === 'résolu' ? 'bg-green-100 text-green-800' :
//                                 'bg-gray-100 text-gray-800'}`}>
//                           {ticket.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">{ticket.user_id}</td>

//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <Link href={route('tickets.edit', ticket.id)} className="text-indigo-600 hover:text-indigo-900 mr-3">
//                           Modifier
//                         </Link>
//                         <button
//                           onClick={(e) => handleDelete(ticket)}
//                           className="text-red-600 hover:text-red-900">
//                           Supprimer
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Pagination links={tickets.meta.links} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }


import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AuthenticatedLayoutUser from "@/Layouts/AuthenticatedLayoutUser";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, tickets, queryParams = null }) {
  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("tickets.index"), queryParams);
  };

  const onkeypress = (name, e) => {
    if (e.key !== "Enter") {
      searchFieldChanged(name, e.target.value);
    }
  };

  const handleDelete = (ticket) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce ticket ?")) {
      return;
    }
    router.delete(route("tickets.destroy", ticket.id));
  };

  const Layout = auth.user.role === "admin" ? AuthenticatedLayout : AuthenticatedLayoutUser;

  return (
    <Layout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>}
    >
      <Head title="Tickets" />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4 sm:p-6 text-gray-900">
              {auth.user && auth.user.role !== "admin" && (
                <div className="mb-4 flex justify-end">
                  <Link
                    href={route("tickets.create")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Nouveau Ticket
                  </Link>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Équipement</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Créé par</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>

                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.description}
                          placeholder="Description"
                          onChange={(e) => searchFieldChanged("description", e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              searchFieldChanged("description", e.target.value);
                            }
                          }}
                        />
                      </th>
                      <th className="px-6 py-3">
                        <TextInput
                          className="w-full"
                          defaultValue={queryParams.equipment_id}
                          placeholder="Équipement"
                          onChange={(e) => searchFieldChanged("equipment_id", e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              searchFieldChanged("equipment_id", e.target.value);
                            }
                          }}
                        />
                      </th>
                      <th className="px-6 py-3">
                        <SelectInput
                          defaultValue={queryParams.status}
                          className="w-full"
                          onChange={(e) => searchFieldChanged("status", e.target.value)}
                        >
                          <option value="">Tous</option>
                          <option value="ouvert">Ouvert</option>
                          <option value="en_cours">En cours</option>
                          <option value="résolu">Résolu</option>
                          <option value="fermé">Fermé</option>
                        </SelectInput>
                      </th>
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {tickets.data.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.equipment_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${ticket.status === "ouvert"
                                ? "bg-blue-100 text-blue-800"
                                : ticket.status === "en_cours"
                                ? "bg-yellow-100 text-yellow-800"
                                : ticket.status === "résolu"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"}`}
                          >
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.user_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link
                            href={route("tickets.edit", ticket.id)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                          >
                            Modifier
                          </Link>
                          <button
                            onClick={() => handleDelete(ticket)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={tickets.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
