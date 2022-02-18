import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// Data Master
// Penyakit
const Penyakit = React.lazy(() => import('./views/pages/Admin/DataMaster/Penyakit'))
const TambahPenyakit = React.lazy(() => import('./views/pages/Admin/DataMaster/Penyakit/Tambah'))
const EditPenyakit = React.lazy(() => import('./views/pages/Admin/DataMaster/Penyakit/Edit'))

// Solusi
const Solusi = React.lazy(() => import('./views/pages/Admin/DataMaster/Solusi'))
const TambahSolusi = React.lazy(() => import('./views/pages/Admin/DataMaster/Solusi/Tambah'))
const EditSolusi = React.lazy(() => import('./views/pages/Admin/DataMaster/Solusi/Edit'))

// Gejala
const Gejala = React.lazy(() => import('./views/pages/Admin/DataMaster/Gejala'))
const TambahGejala = React.lazy(() => import('./views/pages/Admin/DataMaster/Gejala/Tambah'))
const EditGejala = React.lazy(() => import('./views/pages/Admin/DataMaster/Gejala/Edit'))

// Pasien
const Pasien = React.lazy(() => import('./views/pages/Admin/DataMaster/Pasien'))
const TambahPasien = React.lazy(() => import('./views/pages/Admin/DataMaster/Pasien/Tambah'))
const EditPasien = React.lazy(() => import('./views/pages/Admin/DataMaster/Pasien/Edit'))

// Users
const Users = React.lazy(() => import('./views/pages/Admin/Users'))
const TambahUsers = React.lazy(() => import('./views/pages/Admin/Users/Tambah'))
const EditUsers = React.lazy(() => import('./views/pages/Admin/Users/Edit'))

// Bobot
const Bobot = React.lazy(() => import('./views/pages/Admin/Bobot'))
const TambahBobot = React.lazy(() => import('./views/pages/Admin/Bobot/Tambah'))
const EditBobot = React.lazy(() => import('./views/pages/Admin/Bobot/Edit'))

const routes = [
  // Dashboard
  // { path: '/', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },

  // Data Master
  // Penyakit
  { path: '/data-master', name: 'Data Master', component: Penyakit, exact: true },
  { path: '/data-master/penyakit', name: 'Penyakit', component: Penyakit, exact: true },
  {
    path: '/data-master/penyakit/tambah',
    name: 'Tambah Penyakit',
    component: TambahPenyakit,
  },
  {
    path: '/data-master/penyakit/edit/:id',
    name: 'Edit Penyakit',
    component: EditPenyakit,
  },

  // Solusi
  { path: '/data-master/penyakit/:id/solusi', name: 'Solusi', component: Solusi, exact: true },
  {
    path: '/data-master/penyakit/:id/solusi/tambah',
    name: 'Tambah Solusi',
    component: TambahSolusi,
  },
  {
    path: '/data-master/penyakit/:id/solusi/edit/:idSolusi',
    name: 'Edit Solusi',
    component: EditSolusi,
  },

  // Gejala
  { path: '/data-master/gejala', name: 'Gejala', component: Gejala, exact: true },
  {
    path: '/data-master/gejala/tambah',
    name: 'Tambah Gejala',
    component: TambahGejala,
  },
  {
    path: '/data-master/gejala/edit/:id',
    name: 'Edit Gejala',
    component: EditGejala,
  },

  // Pasien
  { path: '/data-master/pasien', name: 'Pasien', component: Pasien, exact: true },
  {
    path: '/data-master/pasien/tambah',
    name: 'Tambah Pasien',
    component: TambahPasien,
  },
  {
    path: '/data-master/pasien/edit/:id',
    name: 'Edit Pasien',
    component: EditPasien,
  },

  // Users
  { path: '/users', name: 'Users', component: Users, exact: true },
  {
    path: '/users/tambah',
    name: 'Tambah Users',
    component: TambahUsers,
  },
  {
    path: '/users/edit/:id',
    name: 'Edit Users',
    component: EditUsers,
  },

  // Bobot
  { path: '/bobot', name: 'Bobot', component: Bobot, exact: true },
  {
    path: '/bobot/tambah',
    name: 'Tambah Bobot',
    component: TambahBobot,
  },
  {
    path: '/bobot/edit/:id',
    name: 'Edit Bobot',
    component: EditBobot,
  },

  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
