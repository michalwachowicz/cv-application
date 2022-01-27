import React from 'react';
import ReactDOM from 'react-dom';
import jsPDF from 'jspdf';
import CVCanvas from '../components/cv/canvas/CVCanvas';

const addCanvas = (userData, onLoad) => {
  ReactDOM.render(
    <CVCanvas userData={userData} onLoad={onLoad} />,
    document.querySelector('#cv'),
  );
};

const removeCanvas = () => {
  ReactDOM.unmountComponentAtNode(document.querySelector('#cv'));
};

const formatExtensionProp = (prop) => (prop ? `${prop.toLowerCase()}-` : '');

const downloadCV = (userData) => {
  addCanvas(userData, (canvas) => {
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('p', 'px', [canvas.width(), canvas.height()]);

    canvas.find('Text').forEach((text) => {
      const size = text.fontSize() / 0.75; // convert pixels to points
      pdf.setFontSize(size);
      pdf.text(text.text(), text.x(), text.y(), {
        baseline: 'top',
        angle: -text.getAbsoluteRotation(),
      });
    });

    pdf.addImage(
      canvas.toDataURL({ pixelRatio: 2 }),
      0,
      0,
      canvas.width(),
      canvas.height(),
    );

    const { firstName, lastName } = userData;
    removeCanvas();
    pdf.save(
      `${formatExtensionProp(firstName)}${formatExtensionProp(lastName)}cv.pdf`,
    );
  });
};

export default downloadCV;
