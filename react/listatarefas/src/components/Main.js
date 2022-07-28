import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  // É executado uma vez assim que for montado
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if(tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    // Trim = remove espaços desnecessários
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if(index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    }else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };


  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
        index,
        novaTarefa: tarefas[index],
      });

}

handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  // Toda vez que a variável mudar, o render vai atualizando na página
  render() {
  const { novaTarefa, tarefas } = this.state;

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <form onSubmit={this.handleSubmit} action="#" className="form">
      <input onChange={this.handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
      </form>

    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
              <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"/>
              <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"/>
          </span></li>
      ))}
    </ul>

    </div>
    );
  }
}
