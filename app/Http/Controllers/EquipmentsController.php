<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEquipmentRequest;
use App\Http\Requests\UpdateEquipmentRequest;
use App\Http\Resources\EquipmentsResource;
use App\Models\equipments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EquipmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = equipments::query();

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("serial_number")) {
            $query->where("serial_number", "like", "%" . request("serial_number") . "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }

        $equipments = $query->paginate(10)->onEachSide(1);
        return Inertia::render('Equipments/Index', [
            'equipments' => EquipmentsResource::collection($equipments),
            'queryParams' => request()->query() ?: null,
            'success' => session('statuses'),
        ]);
    }

    public function create()
    {
        return Inertia('Equipments/Create');
    }

    public function store(StoreEquipmentRequest $request)
    {
        $data = $request->validated();
        $data['created_at'] = now();
        $data['updated_at'] = now();
        equipments::create($data);
        return to_route('equipments.index')->with('success', 'Équipement ajouté avec succès.');
    }

    public function show(equipments $equipment)
    {
        return Inertia::render('Equipments/Show', [
            'equipment' => new EquipmentsResource($equipment),
        ]);
    }

    public function edit(equipments $equipment)
    {
        return Inertia('Equipments/Edit', [
            'equipment' => new EquipmentsResource($equipment),
        ]);
    }

    public function update(UpdateEquipmentRequest $request, equipments $equipment)
    {
        $data = $request->validated();
        $data['updated_at'] = now();

        $equipment->update($data);
        return to_route('equipments.index')
        ->with('success', 'Équipement mis à jour.');
    }

    public function destroy(equipments $equipment)
    {
        $equipment->delete();
        return to_route('equipments.index')
        ->with('success', 'Équipement supprimé.');
    }
}
