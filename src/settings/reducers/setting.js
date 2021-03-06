import actions from 'settings/actions';

const defaultState = {
  source: '',
  json: '',
  form: null,
  error: '',
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
  case actions.SETTING_SET_SETTINGS:
    return { ...state,
      source: action.source,
      json: action.json,
      form: action.form,
      error: '', };
  case actions.SETTING_SHOW_ERROR:
    return { ...state,
      error: action.error,
      json: action.json, };
  case actions.SETTING_SWITCH_TO_FORM:
    return { ...state,
      error: '',
      source: 'form',
      form: action.form, };
  case actions.SETTING_SWITCH_TO_JSON:
    return { ...state,
      error: '',
      source: 'json',
      json: action.json, };
  default:
    return state;
  }
}
