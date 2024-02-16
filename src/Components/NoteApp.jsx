import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class NoteApp extends Component {
  state = {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    newNoteTitle: '',
    newNoteContent: '',
    editingIndex: -1,
  };

  addNote = (event) => {
    event.preventDefault();
    const { newNoteTitle, newNoteContent } = this.state;
    const newNote = { 
      title: newNoteTitle, 
      content: newNoteContent,
      created: new Date()
    };
    let updatedNotes = [...this.state.notes];
    if (this.state.editingIndex === -1) {
      updatedNotes = [...updatedNotes, newNote];
    } else {
      updatedNotes[this.state.editingIndex] = newNote;
    }
    this.setState({ notes: updatedNotes, newNoteTitle: '', newNoteContent: '', editingIndex: -1 }, () => {
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    });
  };

  deleteNote = (noteIndex) => {
    const { notes } = this.state;
    const updatedNotes = notes.filter((_, index) => index !== noteIndex);
    this.setState({ notes: updatedNotes }, () => {
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    });
  };

  editNote = (noteIndex) => {
    const noteToEdit = this.state.notes[noteIndex];
    this.setState({ newNoteTitle: noteToEdit.title, newNoteContent: noteToEdit.content, editingIndex: noteIndex });
  };

  renderNotes = () => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric' 
    };

    return (
      <ul className="mt-4">
        {this.state.notes.map((note, index) => (
          <li className="flex flex-col bg-white rounded-lg shadow-md p-4 mb-2" key={index}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-gray-800">{note.title}</h2>
                <small className="text-gray-500 text-xs">
                  {new Date(note.created).toLocaleDateString('en-US', options)}
                </small>
              </div>
              
              <div>
              <button 
                className="bg-gray-200 hover:bg-yellow-600 hover:text-white text-yellow-600 font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                onClick={() => this.editNote(index)}>
                  Edit
              </button>
              <button
                className="bg-gray-200 hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => this.deleteNote(index)}>
                  Delete
              </button>
              </div>
            </div>
            
            <p className="text-gray-800">{note.content}</p>          
          </li>
        ))}
      </ul>
    );
    
  };

  render() {
    const { newNoteTitle, newNoteContent, editNoteIndex } = this.state;
    const submitButtonText = editNoteIndex === -1 ? 'Add Note' : 'Done';
    return (
      <>
      <div className="mt-4 ml-5  backbtn w-[110px] float-left flex cursor-pointer rounded bg-[#262834] text-[#ffffff] font-medium">
          <Link to="/projects">
            <button className='w-full inline-flex justify-around'>
              <MdOutlineKeyboardBackspace size={30} />Go Back
            </button>
          </Link>
      </div>
      
      <div className="max-w-md mx-auto mt-14 p-4">
        <h1 className="text-5xl text-green-400 text-center font-semibold mb-4">Note App</h1>
        
        <form onSubmit={this.addNote} className="mt-28 mb-8">
          <label htmlFor="new-note-title" className="block font-medium text-white mb-2">
            New Note:
          </label>
          <input 
            onChange={(e) => this.setState({newNoteTitle: e.target.value})} 
            type="text" 
            name="new-note-title" 
            id="new-note-title"
            value={newNoteTitle}
            placeholder="Title"
            className="shadow appearance-none border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {/* <label htmlFor="new-note-content" className="block font-medium text-white mt-4 mb-2">
            Content:
          </label> */}
          <textarea 
            placeholder='Note content goes here..'
            onChange={(e) => this.setState({newNoteContent: e.target.value})} 
            name="new-note-content" 
            id="new-note-content" 
            cols="30" 
            rows="5" 
            value={newNoteContent}
            className="shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          <input type="submit" value={submitButtonText} disabled={!newNoteContent} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline" />
        </form>
        {this.renderNotes()}
      </div>
      </>
    );
  }
  
}

export default NoteApp;
