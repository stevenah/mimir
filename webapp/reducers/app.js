import * as actions from 'actionConstants';
import update from 'immutability-helper';

const initialState = {
    images: {},
    classFilter: 'default',
};

const file = (state = initialState, action) => {
    switch (action.type) {
        
        case actions.RECEIVE_IMAGES:
            return update(state, {
                images: { $merge: action.payload.images }
            });
        
        case actions.ATTACH_FILE:
            return update(state, {
                images: { [action.payload.imageId]: { attached: { $set: true } } }
            });

        case actions.DETACH_FILE:
            return update(state, {
                images: { [action.payload.imageId]: { attached: { $set: false } } }
            });

        case actions.SELECT_FILE:
            return update(state, {
                selectedImageId: {$set: action.payload.fileId}
            });

        case actions.SELECT_CLASS_FILTER:
            return update(state, {
                classFilter: {$set: action.payload.classFilter}
            });
            
        default:
            return state;
    }
};

export default file;