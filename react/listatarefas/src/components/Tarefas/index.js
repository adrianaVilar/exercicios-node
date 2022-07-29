import React from "react";
import PropTypes from "prop-types";

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css'

export default function Tarefas ({handleEdit, handleDelete, tarefas}){
  return (
      <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
              <FaEdit
                  onClick={(e) => handleEdit(e, index)}
                  className="edit"/>
              <FaWindowClose
                  onClick={(e) => handleDelete(e, index)}
                  className="delete"/>
          </span></li>
      ))}
    </ul>
  );
}

// Validando as tarefas no proptype
Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
}