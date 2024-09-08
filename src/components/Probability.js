export default function Probability({ x, n }) {
  return (
    <math>
      <mtable columnalign="left" frame="solid" is="true">
        <mtr is="true">
          <mtd columnalign="right" is="true">
            <mi is="true">P</mi>
            <mo stretchy="false" is="true">
              (
            </mo>
            <mi is="true">{x}</mi>
            <mo stretchy="false" is="true">
              )
            </mo>
            <mo is="true">=</mo>
            <mi is="true">{n}</mi>
          </mtd>
        </mtr>
      </mtable>
    </math>
  );
}
