 @extends('layouts.admin.master')
 
 @section('main-content')
	
	<a href="{{route('addVolunteerView')}}">Register a New Volunteer</a>
    <h3>User List</h3>
    <br>

     @if(Session::has('Success'))
        <label style="color:green;">{{ Session::get('Success') }}</label>
	@endif

    <ul>
    	@if(count($errors) > 0)
    		@foreach($errors->all()  as $error)
    			<li style="color: red;">{{ $error }}</li>
    		@endforeach
    	@endif
    </ul>
	
	<form method="post" action="{{ route('searchview')}}">

		{{ csrf_field() }}

		<label>Search by Name : </label>
		<input type="text" name="fullname">
		<input type="submit" value="Search">
	</form>

	<br/>
	<table border="1">
		<tr>
			<th>FULL NAME</th>
			<th>USERNAME</th>
			<th>TYPE</th>
			<th>OPTION</th>
		</tr>
		@if(count($userlist) > 0)
		   @foreach($userlist->all() as $user)
				<tr>
					<td><a href="{{ route('admin.show',$user->userId) }}">{{ $user->fullname  }}</a></td>
					<td>{{ $user->username }}</td>
					<td>{{ $user->type }}</td>
					<td><a href="{{ route('admin.edit',$user->userId) }}">Edit</a> | <a href="{{ route('admin.destroy',$user->userId) }}" onclick="if(confirm('Are Your sure want to delete?')){
                        event.preventDefault();
                        document.getElementById('delete-form-{{ $user->userId }}').submit();
                      }else{
                        event.preventDefault();
                      }">Delete</a></td>
					<form id="delete-form-{{ $user->userId }}" action="{{ route('admin.destroy',$user->userId) }}" style="display: none;" method="post">

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