<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h4>Heroic Market </h4></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center">

          <li class="nav-item">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </li>

            <li class="nav-item">
              <RouterLink class="link" active-class="active"  to="/cart"> <span> <i class="bi bi-cart"></i> {{ count  }} </span> </RouterLink> 
            </li>
            <li class="nav-item">
              <RouterLink class="link" active-class="active" to="/" >Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="link" active-class="active" to="/addcateg" >about</RouterLink>
            </li>
            <li class="nav-item">
            <RouterLink class="link" active-class="active" to="/add">account</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   <RouterView />
  
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'App',
  components: { },


computed:{
  ...mapState(["count"])
  },

methods:{
    addtocart(){ }
  },  

}
</script>

<style >
.navbar {
  background-color: #787878; /* dull gray color */
}

.d-flex{
    margin: 6px;
    display: inline;
}
.d-flex, a{
padding-right:15px;
}

.d-flex, span{
padding-right:15px;
 padding-left: 15px;
}

.active{
  font-weight: bold;
  color:darkseagreen;
  text-decoration: none;
}

.link{
  font-weight: bold;
  color:rgb(27, 47, 27);
  text-decoration: none;

}

</style>