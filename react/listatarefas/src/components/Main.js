import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Fazer pão',
      'Estudar',
    ]
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  // Toda vez que a variável mudar, o render vai atualizando na página
  render() {
  const { novaTarefa, tarefas } = this.state;

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <form action="#" className="form">
      <input onChange={this.handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
      </form>

    <ul className="tarefas">
      {tarefas.map(tarefas => (
        <li key={tarefas}>
          {tarefas}
          <div>
<FaEdit className="edit"/>
<FaWindowClose className="delete"/>
            </div></li>
      ))}
    </ul>

    </div>
    );
  }
}
