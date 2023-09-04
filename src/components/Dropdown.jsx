import React from 'react'

function Dropdown(){
    return(
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Role
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">Employee</a></li>
  </ul>
</div>
    )
}

export default Dropdown;