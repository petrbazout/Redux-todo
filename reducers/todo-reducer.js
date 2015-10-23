import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, COMPLETE_ALL, UNDO_ALL, UNDO_TODO, UPDATE_TODO } from '../constants/todo-constants';

const initialState = [
	{
		id: 0,
		text: 'Use Redux!',
		completed: false
	}
];

function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return [
			{
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
				text: action.text,
				completed: false
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
		case UNDO_TODO:
			return;
		default:
			return state;
	};
}

export default todos;