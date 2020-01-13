import React from 'react';
import PropTypes from 'prop-types';
import "./modal.style.scss";

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.modalRef = null;
    }

    componentDidMount() {
      window.onclick = function(e) {
        e.target == this.modalRef && this.props.closeModal();
      }.bind(this);
    }

    render() {
      const {
        selectedCharacter
      } = this.props;
      console.log(selectedCharacter);
      return (
        <div id="character-detail-modal" className="modal" ref={ref => this.modalRef = ref}>
          <div className="modal-content">
          <div className="modal-header">
              <h2>{selectedCharacter.name}</h2>
          </div>
          <div className="modal-body">
              <div className="">

              </div>
          </div>
          <div className="modal-footer">
          </div>
          </div>
    
        </div>
      )
    }
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
  selectedCharacter: PropTypes.object
};