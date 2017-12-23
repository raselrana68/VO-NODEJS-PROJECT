@extends('layouts.admin.master')


@section('main-content')
 
  <a href="#">Add Volunteer For this Event</a> <br>
    
    Event Name:<h2> {{ $eventList->eventname  }} </h2>
    Date:    	    {{$eventList->eventdate}}<br>
    Host by:        {{$eventList->hostadmin}}<br>
    Venue:   		 {{$eventList->venue}}<br>
    Status:   		{{$eventList->status}} <hr>

    <h3>Requested Volunteer List For this Event</h3>

    

     @if(Session::has('deletedmsg'))
	   <span style="color:red">{{ Session::get('deletedmsg') }}</span>
	@endif
	 @if(Session::has('acceptmessage'))
	   <span style="color:green">{{ Session::get('acceptmessage') }}</span>
	@endif
	


	<table border='1'>
		<tr>
			<th> User Name </th>
			<th> Option </th>
		</tr>

		@if(count($requestList) > 0)
		   @foreach($requestList->all() as $request)
		   	 @if($request->statuss==1)
			<tr>
				<th>{{ $request->username }}</th>
				<th><a href="{{route('accept',$request->reqId)}}">Accept |</a> 
					<a href="{{route('destroy',$request->reqId)}}">Decline</a> 
				</th>
			</tr>
				@endif
			@endforeach
		@endif
			 
	</table>
@endsection