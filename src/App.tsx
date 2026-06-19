/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Complaint from './pages/Complaint';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import Statistics from './pages/Statistics';
import FAQList1 from './pages/FAQList1';
import FAQList2 from './pages/FAQList2';
import FAQAccordion from './pages/FAQAccordion';
import Articles from './pages/Articles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/articles" replace />} />
          <Route path="complaint" element={<Complaint />} />
          <Route path="events" element={<Events />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="faqs" element={<FAQList1 />} />
          <Route path="faqs-2" element={<FAQList2 />} />
          <Route path="faqs-accordion" element={<FAQAccordion />} />
          <Route path="articles" element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

