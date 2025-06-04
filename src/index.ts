export function printHelloWorld() {
  console.log('HelloWorld');
}

printHelloWorld();

// Vitest in-source test block
if (import.meta.vitest) {
  const { describe, it, expect, vi } = import.meta.vitest;

  describe('printHelloWorld', () => {
    it('should log "HelloWorld" to the console', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      printHelloWorld();
      expect(consoleSpy).toHaveBeenCalledWith('HelloWorld');
      consoleSpy.mockRestore();
    });
  });
}
