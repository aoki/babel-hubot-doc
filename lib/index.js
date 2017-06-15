// export default function({ types: t }) {
//   return {
//     visitor: {
//       BinaryExpression(path) {
//         if (path.node.operator !== "===") {
//           return;
//         }
//
//         path.node.left = t.identifier("sebmck");
//         path.node.right = t.identifier("dork");
//       }
//     }
//   };
// }

module.exports = function ( babel ){
  return {
    visitor: {
      BinaryExpression: {
        enter: function(path) {
          if (path.node.operator !== '===') return;
          path.node.left = babel.types.identifier('babel');
          path.node.right = babel.types.identifier('plugin');
        }
      }
    }
  };
};
