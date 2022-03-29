import React from 'react'

const Beranda = React.lazy(() => import('./views/pages/FrontPage/Content/Beranda'))
const Konsultasi = React.lazy(() => import('./views/pages/FrontPage/Content/Konsultasi'))
const HasilKonsultasi = React.lazy(() =>
  import('./views/pages/FrontPage/Content/Konsultasi/HasilKonsultasi'),
)
const InformasiPenyakit = React.lazy(() =>
  import('./views/pages/FrontPage/Content/InformasiPenyakit'),
)
const DetailInformasi = React.lazy(() => import('./views/pages/FrontPage/Content/DetailInformasi'))
const Bantuan = React.lazy(() => import('./views/pages/FrontPage/Content/Bantuan'))

const routesFront = [
  {
    path: '',
    name: 'Beranda',
    component: Beranda,
    exact: true,
  },
  {
    path: 'beranda',
    name: 'Beranda',
    component: Beranda,
    exact: true,
  },
  {
    path: 'beranda/penyakit/:slug',
    name: 'Beranda',
    component: DetailInformasi,
    exact: true,
  },
  {
    path: 'konsultasi',
    name: 'Konsultasi',
    component: Konsultasi,
    exact: true,
  },
  {
    path: 'konsultasi/hasil/:id',
    name: 'Hasil Konsultasi',
    component: HasilKonsultasi,
    exact: true,
  },
  {
    path: 'informasi',
    name: 'Informasi Penyakit',
    component: InformasiPenyakit,
    exact: true,
  },
  {
    path: 'informasi/:slug',
    name: 'Detail Informasi Penyakit',
    component: DetailInformasi,
    exact: true,
  },
  {
    path: 'bantuan',
    name: 'Bantuan',
    component: Bantuan,
    exact: true,
  },
]

export default routesFront
