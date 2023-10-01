import router from '@mongez/react-router';
import Skills from './Components/Skills/SkillsPage';
import HomePage from './Components/Home/HomePage';

router.group({
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/skills',
      component: Skills,
    },
  ],
});
