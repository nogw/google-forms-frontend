import React, { useState } from 'react';

import Topbar from '../../components/Topbar'
import ContainerDocs from '../../components/ContainerDocs'
import Recents from '../../components/Recents'
import api from '../../services/api'

const Root: React.FC = () => {
  const [search, setSearch] = useState("")

  return (
    <>
      <Topbar search={search} setSearch={setSearch}/>
      <ContainerDocs/>
      <Recents search={search} setSearch={setSearch}/>
    </>
  );
}

export default Root;