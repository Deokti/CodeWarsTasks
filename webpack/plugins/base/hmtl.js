import HtmlWebpackPlugin from 'html-webpack-plugin';
import { SOURCE_DIRECTORY } from '../../constans';
import { join } from 'path';

export function setupHtml() {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: join(SOURCE_DIRECTORY, 'index.html'),
      }),
    ],
  };
}
