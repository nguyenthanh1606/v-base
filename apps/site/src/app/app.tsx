import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@v-site/ui';
import { Input } from '@v-site/ui';
import { useState } from 'react';

export function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to Our Site
          </h1>
          <p className="text-xl text-muted-foreground">
            Built with Nx, React, TypeScript, Vite, and shadcn/ui
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Examples</CardTitle>
              <CardDescription>
                Different button variants from our UI library
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Example</CardTitle>
              <CardDescription>
                Interactive input component from our UI library
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="demo-input" className="text-sm font-medium">
                  Demo Input
                </label>
                <Input
                  id="demo-input"
                  placeholder="Type something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && (
                  <p className="text-sm text-muted-foreground">
                    You typed: {inputValue}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Vite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Lightning fast build tool with hot module replacement for instant development feedback.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏗️ Nx Workspace
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monorepo architecture with smart rebuilds, code sharing, and consistent tooling.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 shadcn/ui
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beautiful, accessible components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                This is a demo application showcasing the integration of:
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">React 18</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">TypeScript</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">Nx Workspace</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">Vite</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">Tailwind CSS</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">shadcn/ui</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;