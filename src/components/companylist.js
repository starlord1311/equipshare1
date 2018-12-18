import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Radio, Table } from "react-bootstrap";
import logo from '../images/site-logo.png';
import {Route, NavLink, HashRouter, Link} from 'react-router-dom';
import {SideMenu, Item} from 'react-sidemenu';
import Menu from './sidemenu.js';
import ReactTable from 'react-table';

export default class CompanyList extends Component {
render() {
  return(
    <div>
    <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>aasfda</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
)
}
}
