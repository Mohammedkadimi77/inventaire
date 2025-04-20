<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequestRequest;
use App\Http\Requests\UpdateRequestRequest;
use App\Http\Resources\RequestsResource;
use App\Models\requests;
use App\Models\tickets;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestsController extends Controller
{
    public function index(Request $request)
    {
        $query = requests::query();

        if (request("equipment")) {
            $query->whereHas('equipment', function($q) {
                $q->where('name', 'like', '%' . request('equipment') . '%');
            });
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }

        $requests = $query->paginate(10)->onEachSide(1);
        return Inertia::render('Requests/Index', [
            'requests' => RequestsResource::collection($requests),
            'queryParams' => request()->query() ?: null,
        ]);
    }


    public function create()
    {
        return Inertia('Requests/Create');
    }

    public function store(StoreRequestRequest $requests)
    {
        $data = $requests->validated();
        $data['created_at'] = now();
        $data['updated_at'] = now();

        requests::create($data);

        return to_route('requests.index')->with('success', 'Demande créée.');
    }
    public function show(requests $request)
    {
        return Inertia::render('Requests/Show', [
            'request' => new RequestsResource($request),
        ]);
    }

    public function edit(requests $request)
    {
        return Inertia('Requests/Edit', [
            'request' => new RequestsResource($request),
        ]);
    }

    public function update(UpdateRequestRequest $requests, requests $request)
    {

        $data = $requests->validated();
        $data['updated_at'] = now();

        $request->update($data);
        return to_route('requests.index')
        ->with('success', 'Demande mis à jour.');
    }

    public function destroy(requests $request)
    {

        $request->delete();
        return to_route('requests.index')
        ->with('success', 'Demande supprimée.');
    }
}
