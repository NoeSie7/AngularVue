
import Usuario from '../components/Usuario.vue';
import Role from '../components/Role.vue';
import Privilege from '../components/Privilege.vue';
import PrivilegeRole from '../components/PrivilegeRole.vue'
import UserRoles from '../components/UserRoles.vue'




export const routes = [
    {path: '/', component: Usuario},
    {path: '/role', component: Role},
    {path: '/privilege', component: Privilege},
    {path: '/privilege/:id_privi', component: PrivilegeRole},
    {path: '/roles/:id', component: UserRoles},
  ];


