import React from "react";
import PropTypes from 'prop-types';
// Form
import { FaPlus } from 'react-icons/fa';

import './Form.css'

export default function Form({handleChange, handleSubmit, novaTarefa}) {
  return (
      <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
      </form>
  );
}

// Se não usar o "isRequired"
// Form.defaultProps = {
//   novaTarefa: 'Valor padrao aqui',
// };

Form.propTypes = {
  handleChange: PropTypes.func.isRequired, // O campo é requerido. Se não for, precisa setar um valor padrão
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
