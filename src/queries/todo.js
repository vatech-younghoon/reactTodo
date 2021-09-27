import { gql } from "@apollo/client";

const SEARCH_TODO = gql`
  query searchTodo(
    $args: InputSearchTodo
    $comparison: String
    $match: String
    $sort: InputSort
  ) {
    searchTodo(
      args: $args
      comparison: $comparison
      match: $match
      sort: $sort
    ) {
      id
      text
      done
    }
  }
`;

const CREATE_TODO = gql`
  mutation createTodo($id: String!, $text: String!, $done: Boolean!) {
    createTodo(id: $id, text: $text, done: $done) {
      id
      text
      done
    }
  }
`;

const REMOVE_TODO = gql`
  mutation removeTodo($id: String!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $text: String!, $done: Boolean!) {
    updateTodo(id: $id, text: $text, done: $done) {
      id
      text
      done
    }
  }
`;

export { SEARCH_TODO, CREATE_TODO, REMOVE_TODO, UPDATE_TODO };
