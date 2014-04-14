module.exports = {
  element: function(name, attrs, children){
    return {
      type: 'element',
      tag: name,
      attrs: attrs,
      children: children
    }
  },
  if: function(test, consequent, alternate){
    return {
      type: 'if',
      test: test,
      consequent: consequent,
      alternate: alternate
    }
  },
  list: function(sequence, variable, body){
    return {
      type: 'list',
      sequence: sequence,
      variable: variable,
      body: body
    }
  },
  text: function(text){
    return text;
  },
  inteplation: function(expression){
    return {
      type: 'inteplation',
      expr:  expression
    }
  },
  filter: function(object, filters){
    return {
      type: 'filter',
      object: object,
      filters: filters
    }
  },
  //coi
  // expression
  condition: function(test, consequent, alternate){
    return {
      type: 'condition',
      test: test,
      consequent: consequent,
      alternate: alternate
    }

  },
  logic: function(op, left, right){
    return {
      type: 'logic',
      op: op,
      left: left,
      right: right
    }
  },
  binary: function(op, left, right){
    return {
      type: 'binary',
      op: op,
      left: left,
      right: right
    }
  },
  unary: function(op, arg){
    return {
      type: 'logic',
      op: op,
      arg: arg
    }
  },
  call: function(callee, args){
    return {
      type: 'call',
      callee: callee,
      args: args
    }

  },
  member: function(obj, prop, isComputed){
    return {
      type: 'member',
      obj: obj,
      prop: prop,
      isComputed: isComputed
    }
  }
}