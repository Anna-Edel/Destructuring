// src/js/__tests__/app.test.js

import { describe, test, expect } from '@jest/globals';
import getSpecialAttacks from '../app';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

describe('Testing getSpecialAttacks', () => {
  test('should return an array with correct structure', () => {
    const result = getSpecialAttacks(character);
    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('should handle empty special attacks array', () => {
    const result = getSpecialAttacks({ special: [] });
    expect(result).toEqual([]);
  });

  test('should set default description when missing', () => {
    const customCharacter = {
      special: [
        {
          id: 1,
          name: 'Тестовая атака',
          icon: 'http://test.com',
        },
      ],
    };
    const result = getSpecialAttacks(customCharacter);
    expect(result).toEqual([
      {
        id: 1,
        name: 'Тестовая атака',
        icon: 'http://test.com',
        description: 'Описание недоступно',
      },
    ]);
  });
});
