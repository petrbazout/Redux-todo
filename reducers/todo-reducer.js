import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, COMPLETE_ALL, UNDO_ALL, UPDATE_TODO } from '../constants/todo-constants';

const initialState = [
	{
		id: 0,
		text: 'Use Redux!',
		complete: false
	}
];

function todo(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return [
			{
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
				text: action.text,
				comleted: false
			}, ...state
			];
		case REMOVE_TODO:
			return;
		case UPDATE_TODO:
			return;
		case COMPLETE_TODO:
			return;
		case COMPLETE_ALL:
			return;
		case UNDO_ALL:
			return;
		default:
			return state;
	};
}

export default todo;