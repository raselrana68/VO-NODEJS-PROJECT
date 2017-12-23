 @extends('layouts.admin.master')
 
 @section('main-content')

	 <a href="{{route('newevent')}}">Create a New Event</a>
      <br>
      <br>
     @if(Session::has('Success'))
        <label style="color:green;">{{ Session::get('Success') }}</label>
	@endif
	
      <h3>All Event List by AIUB SHOMOY CLUB</h3>
	<br/>

		<table border="3">
		<tr>
			<th>Event Name</th>
			<th>Event Date</th>
			<th>Venue</th>
			<th>Host Admin</th>
			<th>Status</th>
			<th>Event Request</th>
			<th>Event Volunteer</th>
			<th>OPTION</th>

		</tr> 
		@if(count($eventList) > 0)
		   @foreach($eventList->all() as $event)
				<tr>
					<td><a href="{{ route('eventDetails',$event->eventId)}}">{{ $event->eventname }}</a></td>
					<td>{{ $event->eventdate  }}</td>
					<td>{{ $event->venue}}</td>
					<td>{{ $event->hostadmin }}</td>
					<td>{{ $event->status }}</td>
					<td><a href="{{ route('requestView',$event->eventId)}}">View Request</a></td>
					<td><a href="{{ route('eventvolunteer',$event->eventId)}}">View Volunteer</a></td>
					<td> 
						<a href="{{ route('event.edit',$event->eventId) }}"> EDIT <a/> | 
						
						<a href="{{ route('event.destroy',$event->eventId) }}" onclick="if(confirm('Are Your sure want to delete?')){
	                        event.preventDefault();
	                        document.getElementById('delete-form-{{ $event->eventId }}').submit();
	                      }else{
	                        event.preventDefault();
	                      }"> Delete </a>
                    </td>
					
					<form id="delete-form-{{ $event->eventId}}" action="{{ route('event.destroy',$event->eventId) }}" style="display: none;" method="post">

						{{ csrf_field() }}

						{{ method_field('DELETE') }}

					</form>

				</tr>
			@endforeach
		@endif	 
	</table>
@endsection

@section('scripts')

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   
@endsection