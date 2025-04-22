<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Http\Resources\TicketsResource;
use App\Models\tickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = tickets::query();


        if ($request->has('description')) {
            $query->where('description', 'like', '%' . $request->description . '%');
        }

        if ($request->has('equipment_id')) {
            $query->where('equipment_id', $request->equipment_id);
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
    $user = Auth::user();

    if ($user->role === 'admin') {
        $tickets = $query->get(); // admin voit tout
    } else {
        $tickets = $query->where('user_id', $user->id)->get(); // user voit ses tickets
    }

        $tickets = $query->paginate(10)->onEachSide(1);
        return Inertia::render('Tickets/Index', [
            'tickets' => TicketsResource::collection($tickets),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    public function create()
    {
        return Inertia('Tickets/Create', [
            'role' => Auth::user()->role,
        ]);
    }

    public function store(StoreTicketRequest $request)
    {
        $data = $request->validated();
        $data['created_at'] = now();
        $data['updated_at'] = now();

        tickets::create($data);

        return to_route('tickets.index')
        ->with('success', 'Ticket créé.');
    }

    public function show(tickets $ticket)
    {
        return Inertia::render('Tickets/Show', [
            'ticket' => new TicketsResource($ticket),
        ]);
    }

    public function edit(tickets $ticket)
    {
        return Inertia('Tickets/Edit', [
            'ticket' => new TicketsResource($ticket),
            'role' => Auth::user()->role,
        ]);
    }

    public function update(UpdateTicketRequest $request, tickets $ticket)
    {

        $data = $request->validated();
        $data['updated_at'] = now();

        $ticket->update($data);
        return to_route('tickets.index')
        ->with('success', 'Ticket mis à jour.');
    }

    public function destroy(Tickets $ticket)
    {

        $ticket->delete();
        return to_route('tickets.index')
        ->with('success', 'Ticket supprimé.');
    }
}
