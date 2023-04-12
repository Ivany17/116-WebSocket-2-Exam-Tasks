import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActionsCreators from './actions/actionCreators';

function App() {
  const {isFetching, error, messages} = useSelector(chat => state.chat);
  const dispatch = useDispatch();
  const {getMessageRequest, createMessageRequest} = bindActionCreators(chatActionsCreators, dispatch);
  useEffect(() => {
    getMessageRequest();
  }, []);

  return (
    <div>
      <h2>
        List messages
      </h2>
      <ul>
        {
          messages.map((msg) => (<li key = {msg._id}>{msg.text}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
