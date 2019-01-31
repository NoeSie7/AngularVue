import Vue from "vue";
import VueRouter from "vue-router";

import UserComponent from "../views/User.vue";
import UserFormComponent from "../components/UserForm.vue";
import BootstrapComponent from "../components/bootstrap.vue";
import RolesComponent from "../views/Roles.vue";
import RolFormComponent from "../components/RolForm.vue";
import PrivilegeComponent from "../views/Privilege.vue";
import PrivilegeFormComponent from "../components/PrivilegeForm.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/" , component: null, redirect: "/user"},
  { path: "/privilege" , component: BootstrapComponent ,
    children: [
      {path: "", component: PrivilegeComponent},
      {path: "update/:id" , component: PrivilegeFormComponent},
      {path: "add" , component: PrivilegeFormComponent}
    ]
  },
  { path: "/roles" , component: BootstrapComponent ,
    children: [
      {path: "", component: RolesComponent},
      {path: "update/:id" , component: RolFormComponent},
      {path: "add" , component: RolFormComponent}
    ]
  },
  {
    path: "/user",
    component: BootstrapComponent,
    children: [
      { path: "", component: UserComponent },
      { path: "update/:id", component: UserFormComponent },
      { path: "add", component: UserFormComponent }
    ]
  }
];

export const router = new VueRouter({ routes });
