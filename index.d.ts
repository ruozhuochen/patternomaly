/**
 * Generate a single (HTML5) canvas pattern
 * @param shapeType pattern shape type
 * @param backgroundColor background color of pattern e.g. '#1f77b4'
 * @param patternColor color of the pattern e.g. '#000000'
 * @param size of pattern "gutter"
 */

declare module "patternomaly" {
    const generate: (colorList: Array<string>) => Array<CanvasPattern>;
    const draw:
    (shapeType: 'plus' | 'cross' | 'dash' | 'cross-dash' | 'dot' | 'dot-dash' | 'disc' | 'ring' | 'line' | 'line-vertical' | 'weave' | 'zigzag' | 'zigzag-vertical' | 'diagonal' | 'diagonal-right-left' | 'square' | 'box' | 'triangle' | 'triangle-inverted' | 'diamond' | 'diamond-box',
    /** background color of pattern e.g. '#1f77b4' */
    backgroundColor: string,
    /** color of the pattern e.g. #000000 */
    patternColor?: string,
    size?: number) => CanvasPattern;
    export = draw;
    export = generate;
}
