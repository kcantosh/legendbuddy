# legendbuddy
A tool for quickly making legends for CartoDB maps

CartoDB legends are auto-generated when using the wizards, but the ability to build an ad-hoc legend is limited.
There is also no concept of dashed lines and strokes, or polygons with strokes byut no fill in the current legend setup.

The intent is let the user build a legend with a GUI, then copy and paste an HTML snippet to bring it into their map in CartoDB.

For now it is just a Proof of Concept for some of the GUI elements and inline CSS (you can't add `<style>` tags to a cartoDB custom legend, so all the sytles need to be inline.)

Some nice to haves:
- Add a backend (or use localStorage) so users can save their legends and come back to them later.
- Add a nice color picker.


![legend](https://cloud.githubusercontent.com/assets/1833820/9563545/23c4579a-4e55-11e5-96f0-4c365cea09b6.gif)
