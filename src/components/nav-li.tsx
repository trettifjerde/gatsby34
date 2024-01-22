import * as React from 'react';
import { ProjectNavLi } from "../types";

const NavLi = ({info, id}: {info: ProjectNavLi | null, id: string}) => {
    return <li key={id}>
    <a href={info?.slug || ''}>{info?.name}</a>
  </li>
}

export default NavLi;