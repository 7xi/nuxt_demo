const actions = {
    addCount(context) {
        setTimeout(() => {
            context.commit('SET_ASYNCADDNUM_MUTATION', Math.ceil(Math.random() * 100))
        }, 1000)
    }
}

export default actions