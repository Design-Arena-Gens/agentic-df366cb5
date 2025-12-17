import { Component, computed, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly achievements = [
    { label: 'Angular module migrations delivered', value: '9' },
    { label: 'Average rollout time reduction', value: '62%' },
    { label: 'Accessibility issues prevented', value: '140+' },
  ];

  readonly panels = [
    {
      id: 'workflow',
      title: 'Workflow Orchestration',
      summary:
        'Dynamic onboarding flows built with standalone components and route-level feature isolation.',
      checkpoints: [
        'Config-driven guards orchestrated with functional resolvers',
        'Lazy-loaded analytics module shared with React via federated module',
        'Optimistic UI patterns powered by RxJS state streams',
      ],
    },
    {
      id: 'designsystem',
      title: 'Design System Bridge',
      summary:
        'Angular implementation of the Pulse design system, mirroring React primitives and theme tokens.',
      checkpoints: [
        'Theming API with CSS custom properties + Angular signals',
        'Storybook docs authored once and consumed by both frameworks',
        'Snapshot testing ensures parity with React components',
      ],
    },
    {
      id: 'ops',
      title: 'Operations Console',
      summary:
        'Real-time tooling for support teams integrating Angular Signals, ngrx, and WebSocket streams.',
      checkpoints: [
        'Signal-based cache invalidation keeps UI snappy without manual subscriptions',
        'Background synchronization surfaces conflict resolutions to React marketing apps',
        'Cypress + Playwright suites guard mission-critical workflows nightly',
      ],
    },
  ];

  readonly selectedPanelId = signal(this.panels[0]?.id ?? '');

  readonly selectedPanel = computed(() =>
    this.panels.find((panel) => panel.id === this.selectedPanelId())
  );

  readonly callouts = [
    'Angular 17 standalone APIs · Signals · Deferred views',
    'Nx monorepo leadership and linting automation',
    'Design partnership: token pipelines, visual QA, audits',
  ];

  selectPanel(id: string) {
    this.selectedPanelId.set(id);
  }
}
