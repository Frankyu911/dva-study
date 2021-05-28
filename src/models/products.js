export default {
  namespace: "products",
  state: [{ishave:true}],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter((item) => item.id !== id);
    },
  },
};
