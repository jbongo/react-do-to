import React from 'react';
import ReactDOM from 'react-dom';

class AddTask extends React.Component {

    render (){
        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }
}


export default AddTask;